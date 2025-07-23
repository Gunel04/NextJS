import { Metadata } from 'next'

const MetaData = (title:string, description:string) => {
    const metadata: Metadata = {
        title: title,
        description: description
    }
    return metadata;
}

export default MetaData