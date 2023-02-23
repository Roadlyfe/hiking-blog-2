'use client'

import { NextStudio } from 'next-sanity/studio'

import config from './../../sanity.config';

//change the above route if things are broken

export default function StudioPage() {
    // Supports the same props ad 'import {Studio} from 'sanity' `, `config` is required
    return <NextStudio config={config} />
}