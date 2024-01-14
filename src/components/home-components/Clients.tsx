
import Slider from "react-slick";
export default function Clients() {
	const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 1500,
    cssEase: "linear",
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,

				}
			},									
		]
  };

	return (
		<section className="mx-auto w-5/6 py-8">
					<Slider {...settings}>
						<div className="space-y-4">
							<img
								src="/client01.webp"
								alt="client01"
								className="h-20 mx-auto object-contain"
							/>
						</div>
						<div className="space-y-4">
							<img
								src="/client02.webp"
								alt="client02"
								className="h-20 mx-auto object-contain"
							/>
						</div>
						<div className="space-y-4">
							<img
								src="/client03.webp"
								alt="client03"
								className="h-20 mx-auto object-contain"
							/>
						</div>
						<div className="space-y-4">
							<img
								src="/client04.webp"
								alt="client04"
								className="h-20 mx-auto object-contain"
							/>
						</div>
						<div className="space-y-4">
							<img
								src="/client05.webp"
								alt="client05"
								className="h-20 mx-auto object-contain"
							/>
						</div>
					</Slider>
				</section>
	)
}
