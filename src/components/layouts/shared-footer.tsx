import Link from "next/link";


export default function SharedFooter() {
  return (
    <footer className="border-t-2 text-slate-400 border-gray-400 py-3">
      Inspired by: {" "}
      <Link className="underline text-white" href={"https://usehooks-ts.com"}>usehooks-ts.com</Link>
    </footer>
  )
}
