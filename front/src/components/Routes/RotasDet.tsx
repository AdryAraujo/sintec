import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React from 'react';

export default function RotasDet() {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Contas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/ContDet'>Contas Detalhado</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}