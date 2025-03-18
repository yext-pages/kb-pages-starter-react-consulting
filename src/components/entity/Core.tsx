import { ReactNode } from "react";
import {
  Link,
  Address,
  getDirections,
  LocationMap,
  GoogleMaps,
  HoursTable,
} from "@yext/pages-components";
import type { LocationProfile } from "src/types/entities";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { useBreakpoint } from "src/common/useBreakpoints";
import { LazyLoadWrapper } from "src/components/common/LazyLoadWrapper";
import { getMapKey } from "src/common/getMapKey";
import { useTemplateData } from "src/common/useTemplateData";
import ErrorBoundaryWithAnalytics from "../common/ErrorBoundaryWithAnalytics";
import ShopImage from "src/assets/images/shop.jpg";

const Core = () => {
  const templateData = useTemplateData();
  const profile = templateData.document as LocationProfile;

  return (
    <ErrorBoundaryWithAnalytics name="core">
      <CoreLayout profile={profile} />
    </ErrorBoundaryWithAnalytics>
  );
};

type CoreLayoutProps = {
  profile: LocationProfile;
};

const CoreSection = (props: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`justify-center min-w-min bordered-box-h w-full md:w-[45%] lg:w-[25%] xl:w-[30%] mb-2 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

const CoreHeading = (props: { children: ReactNode }) => {
  return (
    <h2 className="justify-items-center font-legendSerif text-[24px] xl:text-[35px] mb-4">
      {props.children}
    </h2>
  );
};

const CoreLayout = (props: CoreLayoutProps) => {
  const mapKey = getMapKey();
  const isDesktopBreakpoint = useBreakpoint("sm");
  const { profile } = props;
  const dayNames = {
    monday: "Mon",
    tuesday: "Tues",
    wednesday: "Wed",
    thursday: "Thur",
    friday: "Fri",
    saturday: "Sat",
    sunday: "Sun",
  };
  const mappinSVG = (
    <svg
      width="56"
      height="58"
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
        fill="#0F70F0"
        stroke="black"
        strokeOpacity="0.5"
      />
      <path
        d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
        fill="white"
      />
    </svg>
  );

  const directionUrl = getDirections(
    profile.address,
    profile.ref_listings,
    profile.googlePlaceId
  );

  const defaultNumber = "(515) 282-6666";

  return (
    <div className="py-8 sm:py-16 bg-brand-gray-100 text-brand-primary">
      <div className="container">
        <div className="section gap-8 justify-around flex flex-row flex-wrap w-full">
          <CoreSection className="text-center">
            <div className="bordered-box bordered-box-v">
              <CoreHeading>Information</CoreHeading>
              <div className="mb-4 mt-6 phone">
                <Link
                  href={profile.t_mainPhone ? profile.t_mainPhone.href : "#"}
                >
                  {profile.t_mainPhone
                    ? profile.t_mainPhone.label
                    : defaultNumber}
                </Link>
              </div>
              <Address address={profile.address} />
              <div className="mt-3">
                <Link
                  className="direction mt-2"
                  href={`${directionUrl}`}
                  eventName="getdirections"
                >
                  Get Directions
                </Link>
              </div>
              {profile.t_tollFreePhone && (
                <div className="flex items-center mt-4">
                  <FaPhone className="text-blue-500 mr-2" />
                  <span className="mr-2 font-bold">Toll-free</span>
                  {profile.t_tollFreePhone.label && (
                    <Link
                      href={profile.t_tollFreePhone.href}
                      className="link-underline"
                    >
                      {profile.t_tollFreePhone.label}
                    </Link>
                  )}
                </div>
              )}
              {profile.emails && profile.emails.length > 0 && (
                <div className="flex items-center mt-4">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  <Link
                    className="link-primary link-underline font-bold"
                    cta={{ link: profile.emails[0], linkType: "Email" }}
                    eventName="email"
                  >
                    {profile.emails[0]}
                  </Link>
                </div>
              )}
            </div>
          </CoreSection>
          {(profile.hours || profile.additionalHoursText) && (
            <CoreSection>
              <div className="bordered-box-v">
                <CoreHeading>Hours</CoreHeading>
                {profile.hours && (
                  <HoursTable
                    hours={profile.hours}
                    startOfWeek="monday"
                    dayOfWeekNames={dayNames}
                  />
                )}
                {profile.additionalHoursText && (
                  <div className="mt-4">{profile.additionalHoursText}</div>
                )}
                <div className="mt-2 mb-6">Closed on Christmas Day</div>
              </div>
            </CoreSection>
          )}
          {(profile.hours || profile.additionalHoursText) && (
            <CoreSection>
              <div className="bordered-box-v">
                <CoreHeading>Drive-Thru Hours</CoreHeading>
                {profile.hours && (
                  <HoursTable
                    hours={profile.hours}
                    startOfWeek="monday"
                    dayOfWeekNames={dayNames}
                  />
                )}
                {profile.additionalHoursText && (
                  <div className="mt-4">{profile.additionalHoursText}</div>
                )}
                <div className="mt-2 mb-6">Closed on Christmas Day</div>
              </div>
            </CoreSection>
          )}
        </div>
        <div className="section gap-8 justify-center flex flex-row flex-wrap w-full mt-8">
          <div className="justify-center min-w-min map bordered-box-h lg:w-[48%] mb-2">
            <div className="h-[100%] w-[100%] bordered-box-v">
              {isDesktopBreakpoint && profile.yextDisplayCoordinate && (
                <LazyLoadWrapper>
                  <LocationMap
                    className="w-full h-full"
                    coordinate={profile.yextDisplayCoordinate}
                    provider={GoogleMaps}
                    {...mapKey}
                  >
                    {mappinSVG}
                  </LocationMap>
                </LazyLoadWrapper>
              )}
            </div>
          </div>
          <div className="justify-center min-w-min shop bordered-box-h md:w-[47%] lg:w-[48%] mb-2">
            <div className="h-[100%] w-[100%] bordered-box-v">
              <img
                src={ShopImage}
                alt="shop-img"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
