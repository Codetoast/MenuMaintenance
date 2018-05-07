using Microsoft.Azure.Documents.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend
{
    public class DatabaseCrudWrapper : IDatabaseCrudWrapper
    {
        private string endpoint;
        private string token;


        public DatabaseCrudWrapper(string endpoint, string token)
        {
            this.endpoint = endpoint;
            this.token = token;
        }

        public IEnumerable<T> GetFullList<T>(string databaseid, string collectionid)
        {
            using (DocumentClient client = new DocumentClient(new Uri(endpoint), token)) {
                var collectionUri = UriFactory.CreateDocumentCollectionUri(databaseid, collectionid);
                return client.CreateDocumentQuery<T>(collectionUri).ToList();
            }
        }
    }
}
