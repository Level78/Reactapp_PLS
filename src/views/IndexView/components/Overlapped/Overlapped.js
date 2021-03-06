

import React from 'react';
import { Box } from '@material-ui/core';
import { OverlapedImages } from 'components/molecules';

export default function Example() {
    return (
        <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} borderRadius="4px">
            <OverlapedImages
                image1={{
                    src: 'https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/PLS_Gallery_New_Pic_2-min_SyynXtbc0.jpeg',
                    srcSet: 'https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/PLS_Gallery_New_Pic_2-min_SyynXtbc0.jpeg',
                    alt: '...',
                }}
                image2={{
                    src: 'https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/Optimized-LRM_EXPORT_16960852736595_20190716_173122977_DNdrW3wco.jpeg',
                    srcSet: 'https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/Optimized-LRM_EXPORT_16960852736595_20190716_173122977_DNdrW3wco.jpeg',
                    alt: '...',
                }}
                image3={{
                    src: 'https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/LRM_EXPORT_29731947359915_20190705_002835450-min_GMeTiYy3T.jpeg',
                    srcSet: 'https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/LRM_EXPORT_29731947359915_20190705_002835450-min_GMeTiYy3T.jpeg',
                    alt: '...',
                }}
            />
        </Box>
    );
}