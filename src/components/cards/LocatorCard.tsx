import type { CardProps } from "@yext/search-ui-react";
import { HoursStatus, Link } from "@yext/pages-components";
import classNames from "classnames";
import { LocationProfile } from "src/types/entities";
import { useTemplateData } from "src/common/useTemplateData";
import { MaybeLink } from "src/components/common/MaybeLink";

export interface LocatorCardProps {
  useKilometers?: boolean;
}

const LocatorCard = (props: LocatorCardProps & CardProps<LocationProfile>) => {
  const { result } = props;
  const { rawData } = result;
  const { address, hours, slug, timezone } = rawData;
  const { relativePrefixToRoot } = useTemplateData();

  return (
    <div className="font-primary">
      <div className="flex justify-between">
        <MaybeLink
          className="link-primary hover:underline"
          href={slug ? relativePrefixToRoot + slug : ""}
        >
          <h3 className="heading heading-sub pb-2 sm:pb-4">
            {address.line1 ? address.line1 : address.city}
          </h3>
        </MaybeLink>
        <TeaserDistance {...props} className="hidden sm:flex" />
      </div>
      {hours && timezone && (
        <div className="pb-2 sm:pb-4 h-6 mb-4">
          <HoursStatus
            dayOfWeekTemplate={() => null}
            hours={hours}
            timezone={timezone}
            separatorTemplate={() => <span className="bullet" />}
            className="h-full text-[18px] font-legendSerif"
          />
        </div>
      )}
      <div className="mb-2 flex justify-between">
        <div className="sm:w-[50%] mt-4">{address.line1}</div>
        <Link
          className="link-primary link-info hidden sm:inline"
          href="#"
          eventName="getdirections"
        >
          visit page
        </Link>
      </div>
      <div>
        <Link
          className="link-primary link-underline"
          href="#"
          eventName="getdirections"
        >
          Get Directions
        </Link>
      </div>
      <div className="mt-4 flex">
        <Link
          className="link-primary link-underline"
          href="#"
          eventName="getdirections"
        >
          (515) 282-6666
        </Link>
      </div>
      <div className="sm:hidden flex justify-between items-center w-full">
        <TeaserDistance {...props} />
        <button className="link-info">visit page</button>
      </div>
      <button className="sm:hidden w-full button button-secondary font-legendSerif text-[19px] mt-4">
        <span className="order mr-4"></span>
        <span className="mt-2">Start your order</span>
      </button>
    </div>
  );
};

const TeaserDistance = (
  props: LocatorCardProps & CardProps<LocationProfile> & { className?: string }
) => {
  const { className, result, useKilometers = false } = props;
  const { distanceFromFilter } = result;

  if (!distanceFromFilter) {
    return null;
  }

  return (
    <div className={classNames("whitespace-nowrap pt-2 sm:pt-0", className)}>
      {`${getDistance(distanceFromFilter, useKilometers)} ${
        useKilometers ? "km" : "mi"
      }`}
    </div>
  );
};

// Convert meters to miles or kilometers.
function getDistance(distance: number, useKilometers: boolean) {
  if (useKilometers) {
    return (distance / 1000).toFixed(2);
  }
  return (distance / 1609.344).toFixed(2);
}

export default LocatorCard;
