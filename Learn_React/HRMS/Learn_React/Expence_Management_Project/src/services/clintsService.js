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
const ref = collection(db, "clients");
export async function addClient(data) {
  return addDoc(ref, { ...data, createdAt: serverTimestamp() });
}
export async function getClients() {
  const q = query(ref, orderBy("createdAt", "desc"));
  const s = await getDocs(q);
  return s.docs.map((d) => ({ id: d.id, ...d.data() }));
}
export function deleteClient(id) {
  return deleteDoc(doc(db, "clients", id));
}
