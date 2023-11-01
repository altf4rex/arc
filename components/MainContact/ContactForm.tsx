
export const ContactForm = ({place}: {place: string}) => {
  return (
    <form>
        <input type="text" name="message" placeholder={place} className="border-b-2 border-textGray bg-inherit text-main"/>
    </form>
  )
}
