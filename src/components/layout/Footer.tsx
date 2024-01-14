export default function Footer() {
	return (
		<footer className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-t from-orange-600 via-orange-500 to-amber-500">
			{/* contact form */}
			<form className="p-8" id="contact">
				<h2 className="text-2xl text-white font-bold mb-4">Contáctanos</h2>
				<div className="grid grid-cols-2 gap-4">
					<input
						type="text"
						placeholder="Nombre"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded"
					/>
					<input
						type="text"
						placeholder="Apellido"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded"
					/>
					<input
						type="text"
						placeholder="Correo electrónico"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded"
					/>
					<input
						type="text"
						placeholder="Pais / Region"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded"
					/>
					<input
						type="text"
						placeholder="Nombre de la empresa"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded"
					/>
					<input
						type="text"
						placeholder="Motivo de contacto"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded"
					/>
					<textarea
						name="message"
						id="message"
						rows={4}
						placeholder="Mensaje para suncast"
						className="w-full p-2 bg-gray-200 placeholder:text-black placeholder:opacity-60 rounded col-span-2"
					></textarea>
					<div className="col-span-2 text-center ">
						<button
							type="submit"
							className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-64"
						>
							Enviar
						</button>
					</div>
				</div>
			</form>

			{/* social media */}

			<div className=" py-8 px-4 flex flex-col justify-center items-center">
				<h2 className="text-2xl text-white font-bold mb-4">
					Oficina virtual en Chile
				</h2>
				<h2 className="text-2xl text-white font-bold mb-4">
					Síguenos en nuestras redes
				</h2>
				<div className="flex space-x-4 items-center">
					<a href="#">
						<img src="/youtube-img.webp" alt="facebook" className="w-8" />
					</a>
					<a href="#">
						<img src="/twitter-img.webp" alt="twitter" className="w-8" />
					</a>
					<a href="#">
						<img src="/instagram-img.webp" alt="instagram" className="w-8" />
					</a>
					<a href="#">
						<img src="/linkedin-img.webp" alt="linkedin" className="w-8" />
					</a>
				</div>
				<img src="/suncast-logo.webp" alt="" />
			</div>
		</footer>
	);
}
