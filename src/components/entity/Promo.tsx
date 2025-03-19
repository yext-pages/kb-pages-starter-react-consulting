import { Link, Image, type ImageType, type CTA } from "@yext/pages-components";
import { useTemplateData } from "src/common/useTemplateData";
import { LocationProfile } from "src/types/entities";
import ErrorBoundaryWithAnalytics from "../common/ErrorBoundaryWithAnalytics";

const Promo = () => {
  const templateData = useTemplateData();
  const profile = templateData.document as LocationProfile;
  const promo = profile.c_promoSection;

  if (promo?.title && promo?.image) {
    return (
      <ErrorBoundaryWithAnalytics name="promo">
        <PromoLayout
          title={promo.title}
          description={promo.description}
          image={promo.image}
          cta={promo.cta}
          googlePlayUrl={promo.googlePlayUrl}
          appStoreUrl={promo.appStoreUrl}
        />
      </ErrorBoundaryWithAnalytics>
    );
  }

  return null;
};

type PromoLayoutProps = {
  image?: ImageType;
  title: string;
  description?: string;
  cta?: CTA;
  appStoreUrl?: string;
  googlePlayUrl?: string;
};

const PromoLayout = (props: PromoLayoutProps) => {
  return (
    <div className="bg-brand-primary justify-items-center text-white py-8 sm:py-16">
      <div className="container">
        <h1 className="heading-head text-white mb-4 text-center">Promotions</h1>
        <div className="justify-around flex flex-wrap lg:gap-2">
          <div className="promo-item md:w-[45%] lg:w-[32%] xl:w-[31%] flex flex-col gap-8 mt-8">
            <div>
              {props.image && (
                <Image
                  image={props.image}
                  className="rounded-[5px] promo-image"
                ></Image>
              )}
            </div>
            <div className="text-white text-[28px] lg:text-[35px] font-legendSerif">
              {props.title}
            </div>

            {props.description && <div>{props.description}</div>}

            {props.cta && (
              <Link
                className="button button-secondary w-full self-start"
                cta={props.cta}
              >
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
