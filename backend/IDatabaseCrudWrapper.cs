using System.Collections.Generic;

namespace backend
{
    public interface IDatabaseCrudWrapper
    {
        IEnumerable<T> GetFullList<T>(string databaseid, string collectionid);
    }
}