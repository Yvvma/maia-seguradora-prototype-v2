// hooks/useAgenda.ts
import { useEffect, useState } from "react";

interface AgendaItem {
  date: string;
  name: string;
  location: string;
  link: string;
}

// hooks/useAgenda.ts
export function useAgenda(sheetId: string) {
  const [data, setData] = useState<AgendaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const res = await fetch(
          `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`
        );
        const text = await res.text();
        const json = JSON.parse(text.substring(47).slice(0, -2));

        const rows = json.table.rows
          .slice(1) // 👈 IGNORA HEADER
          .map((row: any) => ({
            name: row.c[0]?.v ?? "",
            date: row.c[1]?.v ?? "",
            location: row.c[2]?.v ?? "",
            link: row.c[3]?.v ?? "",
          }))
          .filter((item: any) => item.name); // remove linhas vazias

        setData(rows);
      } catch (err) {
        console.error("Agenda error:", err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAgenda();
  }, [sheetId]);

  return { data, loading };
}
