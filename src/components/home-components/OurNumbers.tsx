export default function OurNumbers() {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-3 place-items-center py-8 gap-8">
			<div className="space-y-4">
				<img src="/numeros01.webp" alt="numeros01" className="h-32 mx-auto" />
				<h3 className="text-6xl font-bold text-center">1312</h3>
				<p className="text-center text-2xl text-indigo-800 font-bold tracking-wider uppercase">
					MW Gestionados
				</p>
			</div>
			<div className="space-y-4">
				<img src="/numeros02.webp" alt="numeros02" className="h-32 mx-auto" />
				<h3 className="text-6xl font-bold text-center">14</h3>
				<p className="text-center text-2xl text-indigo-800 font-bold tracking-wider uppercase">
					Centrales
				</p>
			</div>
			<div className="space-y-4">
				<img src="/numeros03.webp" alt="numeros03" className="h-32 mx-auto" />
				<h3 className="text-6xl font-bold text-center">2</h3>
				<p className="text-center text-2xl text-indigo-800 font-bold tracking-wider uppercase">
					Tecnologías
				</p>
			</div>
		</section>
	);
}
