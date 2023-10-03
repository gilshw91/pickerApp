import React from 'react'
import PlanContextProvider from '@/context/_PlanContextProvider'

export default function AppProviders ({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <PlanContextProvider>
                {children}
        </PlanContextProvider>
    )
}