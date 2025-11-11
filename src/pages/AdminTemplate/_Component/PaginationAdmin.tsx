import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Ellipsis } from "lucide-react";

type PaginationAdmin = {
  handlePagi: { pageIndex: number; pageSize: number; totalRow: number };
};

export function PaginationAdmin({ handlePagi }: PaginationAdmin) {
  console.log("🎄 ~ PaginationAdmin ~ handlePagi:", handlePagi);
  const { pageIndex, pageSize, totalRow } = handlePagi;
  const totalPagi = Math.ceil(totalRow / pageSize);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="px-[10px]!" />
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
        </PaginationItem> */}

        {pageIndex > 1 && (
          <PaginationItem>
            <PaginationLink href="#">{pageIndex - 1}</PaginationLink>
          </PaginationItem>
        )}

        {pageIndex && (
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {pageIndex}
            </PaginationLink>
          </PaginationItem>
        )}

        {pageIndex && (
          <PaginationItem>
            <PaginationLink href="#">{pageIndex + 1}</PaginationLink>
          </PaginationItem>
        )}
        {totalPagi >= 4 && (
          <PaginationItem className="mr-1">
            <Ellipsis className="size-4" />
          </PaginationItem>
        )}
        {totalPagi >= 3 && (
          <PaginationItem>
            <PaginationLink href="#">{totalPagi}</PaginationLink>
          </PaginationItem>
        )}
        
        <PaginationItem>
          <PaginationNext href="#" className="px-[10px]!" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
