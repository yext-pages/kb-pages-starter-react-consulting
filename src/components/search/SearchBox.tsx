import { FilterSearch, executeSearch } from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";
import { LOCATOR_STATIC_FILTER_FIELD, LOCATOR_ENTITY_TYPE } from "src/config";
import GeolocateButton from "src/components/search/GeolocateButton";

const searchFields = [
  {
    fieldApiName: LOCATOR_STATIC_FILTER_FIELD,
    entityType: LOCATOR_ENTITY_TYPE,
  },
];

type SearchBoxProps = {
  title: string;
  subTitle: string;
  placeholderText?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  const { title, subTitle, placeholderText } = props;

  const searchActions = useSearchActions();

  return (
    <div className="shadow-brand-shadow w-full justify-items-center md:justify-items-stretch shadow-brand-primary p-6">
      <h1 className="heading heading-head mb-8">{title}</h1>
      <div className="mb-4 text-brand-primary font-primary">{subTitle}</div>
      <div className="flex w-full justify-center">
        <div className="relative w-full sm1:w-[80%] justify-items-center">
          <FilterSearch
            customCssClasses={{
              filterSearchContainer:
                "relative flex-1 w-full justify-center h-[54px]",
              inputElement:
                "border-primary p-4 text-sm h-auto rounded-[16px] text-brand-primary",
            }}
            label=""
            placeholder={placeholderText}
            searchFields={searchFields}
            onSelect={({
              currentFilter,
              executeFilterSearch,
              newDisplayName,
              newFilter,
              setCurrentFilter,
            }) => {
              // Update static filters.
              if (currentFilter) {
                searchActions.setFilterOption({
                  filter: currentFilter,
                  selected: false,
                });
              }
              searchActions.setFilterOption({
                filter: newFilter,
                displayName: newDisplayName,
                selected: true,
              });
              setCurrentFilter(newFilter);
              executeFilterSearch(newDisplayName);

              // Execute search on select.
              searchActions.setOffset(0);
              searchActions.resetFacets();
              executeSearch(searchActions);
            }}
          />
        </div>
        <GeolocateButton className="ml-2 hidden sm1:block justify-center items-center location-button w-[58px] h-[58px]" />
      </div>
      <GeolocateButton
        className="mt-2 flex sm1:hidden location-button w-full h-[56px] justify-center items-center text-[19px] font-legendSerif text-brand-primary"
        placeholder="find my location"
      />
    </div>
  );
};

export default SearchBox;
