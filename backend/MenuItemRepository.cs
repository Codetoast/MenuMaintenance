using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
    public class MenuItemRepository : IMenuItemRepository
    {

        private IDatabaseCrudWrapper crudWrapper;

        public MenuItemRepository(IDatabaseCrudWrapper crudWrapper)
        {
            this.crudWrapper = crudWrapper;
        }

        public IEnumerable<string> GetItemsList() {
            return crudWrapper.GetFullList<MenuItem>("menumaintenance", "menuitems")
                .Select(item => item.Name);
        }
    }
}
