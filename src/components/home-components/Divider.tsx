
export default function Divider({ title }: { title: string }) {
	return (
		<section className="my-14">
			<h2 className="text-center max-w-sm mx-auto text-orange-500 text-4xl font-bold">{title}</h2>
			<div className="lg:w-3/12 w-9/12 h-2 rounded bg-indigo-800 mx-auto my-4"></div>
		</section>
	)
}
