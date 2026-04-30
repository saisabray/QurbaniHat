"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <div className="flex w-full md:w-auto">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={handleSortChange}
        defaultValue={searchParams.get("sort")}

      >
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}
