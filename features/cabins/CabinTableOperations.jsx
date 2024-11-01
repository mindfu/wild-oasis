import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'with-discount', label: 'Discounted' },
          { value: 'no-discount', label: 'No Discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by Name (A-Z)' },
          { value: 'name-desc', label: 'Sort by Name (Z-A)' },
          { value: 'regularPrice-asc', label: 'Sort by Price (low)' },
          { value: 'regularPrice-desc', label: 'Sort by Price (high)' },
          { value: 'maxCapacity-asc', label: 'Sort by Price (low)' },
          { value: 'maxCapacity-desc', label: 'Sort by Price (high)' },
        ]}
      />
    </TableOperations>
  );
}
