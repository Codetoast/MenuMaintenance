using System.Collections.Generic;

namespace backend
{
    public interface IMenuItemRepository
    {
        IEnumerable<string> GetItemsList();
    }
}