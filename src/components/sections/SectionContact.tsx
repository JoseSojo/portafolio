import { CopyEmail } from "../partials/CopyEmail"
import { DownloadCvExpand } from "../partials/DownloadCvExpand"
import { ItemGithub } from "../partials/ItemGithub"
import { ItemLinkedin } from "../partials/ItemLinkdin"

export const SectionContact = () => {

    return (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 place-items-center pt-10'>
            {false && <DownloadCvExpand />}
            <CopyEmail />

            <div className='grid gap-3 w-[80%]'>
                <ItemGithub />
                <ItemLinkedin />
            </div>

        </div>
    )
}
