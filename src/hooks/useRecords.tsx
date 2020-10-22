import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
  tagIds: number[],
  note: string,
  category: '+' | '-',
  amount: string,
  createAt: string // ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: newRecordItem) => {
    if(parseFloat(newRecord.amount)<=0){
      return alert('金额不能为0')
    }
    if(newRecord.tagIds.length<=0){
      return alert('请选择标签')
    }
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    alert('保存成功')
  };

  return {records, addRecord};
};