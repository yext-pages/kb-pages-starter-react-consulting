import { Link, Image, type ImageType, type CTA } from "@yext/pages-components";
import { useTemplateData } from "src/common/useTemplateData";
import { LocationProfile } from "src/types/entities";
import ErrorBoundaryWithAnalytics from "../common/ErrorBoundaryWithAnalytics";
import { ReactNode } from "react";

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

const PromoHeading = (props: { children: ReactNode }) => {
  return <h1 className="heading-head text-white mb-4">{props.children}</h1>;
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
      <PromoHeading>Promotions</PromoHeading>
      <div className="w-[90%] justify-center flex flex-wrap gap-8">
        <div className="promo-item md:w-[45%] lg:w-[48%] xl:w-[31%] flex flex-col gap-8 mt-8">
          <div>
            {props.image && (
              <Image
                image={props.image}
                className="rounded-[5px] promo-image"
              ></Image>
            )}
          </div>
          <h2 className="heading-sub text-white">{props.title}</h2>

          {props.description && <div>{props.description}</div>}

          {props.cta && (
            <Link
              className="button button-secondary w-full self-start"
              cta={props.cta}
            />
          )}
        </div>

        <div className="promo-item md:w-[45%] lg:w-[48%] xl:w-[31%] flex flex-col gap-8 mt-8">
          <div>
            {props.image && (
              <Image
                image={props.image}
                className="rounded-[5px] promo-image"
              ></Image>
            )}
          </div>
          <h2 className="heading-sub text-white">{props.title}</h2>

          {props.description && <div>{props.description}</div>}

          {props.cta && (
            <Link
              className="button button-secondary w-full self-start"
              cta={props.cta}
            />
          )}
        </div>

        <div className="promo-item md:w-[45%] lg:w-[48%] xl:w-[31%] flex flex-col gap-8 mt-8">
          <div>
            {props.image && (
              <Image
                image={props.image}
                className="rounded-[5px] promo-image"
              ></Image>
            )}
          </div>
          <h2 className="heading-sub text-white">{props.title}</h2>

          {props.description && <div>{props.description}</div>}

          {props.cta && (
            <Link
              className="button button-secondary w-full self-start"
              cta={props.cta}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Promo;
