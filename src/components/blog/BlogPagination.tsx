
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogPagination = ({ currentPage, totalPages, onPageChange }: BlogPaginationProps) => {
  // Generate page items
  const getPageItems = () => {
    const items = [];
    
    // Always include first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink 
          onClick={(e) => {
            e.preventDefault();
            onPageChange(1);
          }}
          isActive={currentPage === 1}
          href="#"
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Add ellipsis after first page if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 1 || i === totalPages) continue; // Skip first and last pages (already added separately)
      
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
            isActive={currentPage === i}
            href="#"
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Add ellipsis before last page if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    
    // Always include last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink 
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
            isActive={currentPage === totalPages}
            href="#"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
  };
  
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
            href="#"
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        
        {getPageItems()}
        
        <PaginationItem>
          <PaginationNext 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
            href="#"
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
