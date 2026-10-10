import { useState, useEffect, useCallback } from "react";
import { roomApi } from "../api/roomApi";

export function useRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRooms = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await roomApi.getAllRooms();
      setRooms(data);
    } catch (err) {
      setError(err.message || "Không thể tải danh sách phòng.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return { rooms, loading, error, reload: fetchRooms };
}