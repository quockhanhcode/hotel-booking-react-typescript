import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

export function PaginationAdmin() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <ChevronLeft />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
        <PaginationItem>
          <Ellipsis />
        </PaginationItem>
        <PaginationItem>
          <ChevronRight />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
