## Preface
Before going into this project I had a number of goals:
- Define response for all endpoints with type definitions
- Make this SDK compatible with both Node and Browser environments
- Utilize modern async/await syntax
- Make the SDK easy to maintain and extend

## Architecture

Every endpoint has a corresponding class that is responsible for making the request and parsing the response. These classes are built upon the Main base class that handles generalized REST requests. Each class also has its own coresponding interface that defines the expected response. Then the Main class extends the other classes and is then compacted with all the subclass methods.
Additional subclasses are easy to create and only need to define additional methods that call the super class request method. This method takes the url, a function of how to transform the data, and additional url options for filtering and pagination.