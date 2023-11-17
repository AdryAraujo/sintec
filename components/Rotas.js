import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

export default function CircCad() {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='/CircCad'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}