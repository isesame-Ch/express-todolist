var itemSQL = {  
                insert:'INSERT INTO todo_list(item) VALUES(?)', 
                queryAll:'SELECT * FROM todo_list',  
                getById:'SELECT * FROM todo_list WHERE id = ? ',
                delete:'DELETE FROM todo_list WHERE item = ?',
              };
 module.exports = itemSQL;
