
export const ContactForm = ({place}: {place: string}) => {
  return (
    <div className="mt-10">
        <input type="text" 
        name="message" 
        placeholder={place} 
        className="
        mb-2
        pb-3
        pl-3
        w-[300px]
        border-b-2 
        text-mulish
        border-textGray 
        bg-inherit 
        text-main"/>
    </div>
  )
}
