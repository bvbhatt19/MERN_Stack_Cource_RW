import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

const ref = collection(db, 'expenses')

export async function addExpense(data){
  return addDoc(ref, { ...data, createdAt: serverTimestamp() })
}
export async function getExpenses(){
  const q = query(ref, orderBy('createdAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}
export function updateExpense(id, data){
  return updateDoc(doc(db, 'expenses', id), data)
}
export function deleteExpense(id){
  return deleteDoc(doc(db, 'expenses', id))
}
