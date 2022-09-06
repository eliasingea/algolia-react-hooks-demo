import { memo } from 'react';

// React Router import
import { useNavigate } from 'react-router-dom';

// Algolia's imports
import { useRefinementList } from 'react-instantsearch-hooks-web';

// component import
import { ChevronRight } from '@/assets/svg/SvgIndex';

import { federatedCategoriesAttribute } from '@/config/federatedConfig';

function Category(props) {
  const { items } = useRefinementList(props);
  //Get title
  const { title } = props;
  // router hook to navigate using a function
  const navigate = useNavigate();
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      <div className="categories__wrapper">
        <ul className="categories__items">
          {items.map((hit) => {
            return (
              <li
                key={hit.label}
                onClick={() => {
                  navigate('/search', {
                    state: {
                      type: 'filter',
                      action: `${federatedCategoriesAttribute}:"${hit.label}"`,
                    },
                  });
                }}
              >
                <ChevronRight />
                <p>{hit.label.split('>').pop()}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default memo(Category);
