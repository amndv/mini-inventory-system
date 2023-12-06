import { createInterface } from 'readline/promises';
import getItemsAll from "./getItem.js";
import deleteItems from "./deleteItem.js";
import addItems from "./addItem.js";
import updateItems from "./updateItem.js";
import GetSingleItem from "./getSingleItem.js";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const newItemData = []
const scan = process.argv.slice(2);
const input = (scan[0]);
const url = 'http://localhost:3000/items'


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e8; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

const startApp = async () => {
      
        switch(input){
            case '1':
              console.log('ini datanya')
                getItemsAll(url);
                readline.close();                
            break;
            case '2':
              
                const get = await readline.question('\nID: ');
                const idGet = parseInt(get);
                if (GetSingleItem(url, idGet) == null) {
                  console.log('This data is not available');
                } else {
                  console.log("Here's the item with id " +idGet);
                GetSingleItem(url, idGet);
                }
                readline.close();
            break;
            case '3':
                const addName = await readline.question('\nName: ');
                const addQty = parseInt(await readline.question('\nQty: '));
                const price = parseInt(await readline.question('\nPrice: '));
                const addPrice = price.toLocaleString('id-ID');
                addItems(url,addName,addQty,addPrice)
                readline.close();
            break;
            case '4':
                const idToUpdate = parseInt(await readline.question('\nId: '));
                const newName = await readline.question('\nEnter new item name: ');
                const newQty = parseInt(await readline.question('\nEnter new item qty: '));
                const Price = parseInt(await readline.question('\nEnter new item price: '));
                const newPrice = Price.toLocaleString('id-ID');

                console.log('Successfully updated item:\n')
                updateItems(url,idToUpdate,newName,newQty,newPrice)
                readline.close();
                console.log('coming soon')
            break;
            case '5':
                const remove = await readline.question('\nID: ')
                const idDelete = parseInt(remove)        
                // console.log('ini datanya')
                // GetSingleItem(url, idDelete)
                const confirm = await readline.question('\nAre you sure want to delete this item? (yes/no): ')
               
                switch(confirm)
                {
                  case 'yes':
                    
                    deleteItems(url, idDelete)
                    console.log('Deleted successfully');
                    readline.close();
                    break;
                    case 'no':
                      readline.close();
                    break;
                    default:
                      readline.close();
                    break;
                }
                readline.close();
             break;
        }
}
  
startApp()
