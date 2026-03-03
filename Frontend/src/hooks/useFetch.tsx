import { useEffect, useState, useCallback } from "react";
import { api } from "../api/axios";

export const useFetchUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // ✅ 1. ย้ายฟังก์ชันออกมาข้างนอก useEffect เพื่อให้ return ออกไปข้างนอกได้
    // ใช้ useCallback เพื่อป้องกันการสร้างฟังก์ชันใหม่ซ้ำๆ ถ้าไม่จำเป็น
    const fetchUsers = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await api.get('/users'); 
            // ตรวจสอบโครงสร้างข้อมูล (ถ้า backend ส่ง { result: [] } ให้ใช้ res.data.result)
            setUsers(res.data.result || res.data); 
        } catch (err) {
            console.error("Failed to fetch users", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // ✅ 2. เรียกใช้ครั้งแรกเมื่อ Hook ถูกเรียก (Mount)
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // ✅ 3. Return ทั้งข้อมูลและฟังก์ชันออกไป
    return { users, fetchUsers, isLoading };
};

export const useFetchPerformance = () => {
    const [performances, setPerformance] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // ✅ 1. ย้ายฟังก์ชันออกมาข้างนอก useEffect เพื่อให้ return ออกไปข้างนอกได้
    // ใช้ useCallback เพื่อป้องกันการสร้างฟังก์ชันใหม่ซ้ำๆ ถ้าไม่จำเป็น
    const fetchPerformace = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await api.get('/performance'); 
            // ตรวจสอบโครงสร้างข้อมูล (ถ้า backend ส่ง { result: [] } ให้ใช้ res.data.result)
            setPerformance(res.data.result || res.data); 
        } catch (err) {
            console.error("Failed to fetch users", err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // ✅ 2. เรียกใช้ครั้งแรกเมื่อ Hook ถูกเรียก (Mount)
    useEffect(() => {
        fetchPerformace();
    }, [fetchPerformace]);

    // ✅ 3. Return ทั้งข้อมูลและฟังก์ชันออกไป
    return { performances, fetchPerformace, isLoading };
};

