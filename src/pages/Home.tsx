import MainSlider from "../components/home-components/MainSlider";
import Divider from "../components/home-components/Divider";
import Services from "../components/home-components/Services";
import OurNumbers from "../components/home-components/OurNumbers";
import Clients from "../components/home-components/Clients";
import SuccessCase from "../components/home-components/SuccessCase";
import Specs from "../components/home-components/Specs";

export default function Home() {
	return (
		<>
		<MainSlider />
			<div className="container mx-auto">
				<Divider title="Servicios" />
				<Services />
				<Divider title="Nuestros números" />
				<OurNumbers />
				<Divider title="Nuestros clientes" />
				<Clients />
				<Divider title="Casos de éxito" />
				<SuccessCase />
				<Divider title="Características" />
			</div>
			<Specs />
		</>
	)
}
