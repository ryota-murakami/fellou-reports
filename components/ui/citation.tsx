"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { ExternalLink } from "lucide-react"

interface Citation {
  title: string
  url: string
  content: string
  date: string
  siteName: string
  sourceContent: string
}

interface CitationLinkProps {
  id: string
  callType: "quote" | "recommend"
  citations: Record<string, Citation>
  className?: string
}

export function CitationLink({ id, callType, citations, className }: CitationLinkProps) {
  const citation = citations[id]
  
  if (!citation) {
    return null
  }

  if (callType === "quote") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              "inline-flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-help transition-colors",
              "align-super",
              className
            )}
          >
            [{id}]
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
          <div className="space-y-2">
            <p className="font-semibold text-sm">{citation.title}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
              {citation.sourceContent || citation.content}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
              <span>{citation.siteName}</span>
              <span>{citation.date}</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    )
  }

  return (
    <div className={cn("text-sm", className)}>
      <span className="text-gray-500 dark:text-gray-400 mr-2">[{id}]</span>
      <a
        href={citation.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline inline-flex items-center gap-1 transition-colors"
      >
        {citation.title}
        <ExternalLink className="h-3 w-3" />
      </a>
      <span className="text-gray-500 dark:text-gray-400 ml-2">
        ({citation.siteName}, {citation.date})
      </span>
    </div>
  )
} 