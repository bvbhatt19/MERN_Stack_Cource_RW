import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
const ref = collection(db, "employees");
export async function addEmployee(data) {
  return addDoc(ref, { ...data, createdAt: serverTimestamp() });
}
export async function getEmployees() {
  const q = query(ref, orderBy("createdAt", "desc"));
  const s = await getDocs(q);
  return s.docs.map((d) => ({ id: d.id, ...d.data() }));
}
export function deleteEmployee(id) {
  return deleteDoc(doc(db, "employees", id));
}
export function updateEmployee(id, data) {
  return doc(db, "employees", id).update(data);
}
