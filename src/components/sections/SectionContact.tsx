// import { CopyEmail } from "../partials/CopyEmail"
import { DownloadCvExpand } from "../partials/DownloadCvExpand"
import { ItemGithub } from "../partials/ItemGithub"
import { ItemLinkedin } from "../partials/ItemLinkdin"
import { ItemTelegram } from "../partials/ItemTelegram"
import { ItemWhatsapp } from "../partials/ItemWhatsapp"

export const SectionContact = () => {

    return (
        <div className='grid grid-cols-1 gap-5 place-items-center pt-10'>
            {false && <DownloadCvExpand />}
            <div className='grid md:grid-cols-4 gap-3 w-[80%]'>
                <ItemGithub />
                <ItemLinkedin />
                <ItemWhatsapp />
                <ItemTelegram />
            </div>

        </div>
    )
}
