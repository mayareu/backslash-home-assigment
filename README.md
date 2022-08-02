# AWS serverless typescript demo - Backslash Frontend assigment 

### react app representing the code flow of API calls, based on AWS serverless typescrip Demo.
&nbsp;
<img width="1726" alt="Screen Shot 2022-08-02 at 11 09 21" src="https://user-images.githubusercontent.com/62664469/182366970-68fad222-0065-4841-9a81-91d6aabf655a.png">
<hr/>
<p>
Aws demo app consists of an Amazon API Gateway backed by four AWS Lambda functions and an Amazon DynamoDB table for storage.
<p/>

<h2> App data </h2>
<p>
Manually created csv files, one for nodes and another for the relations between them.
</p>

<p><pre>
Reading csv files didn't work due to  `versions` incompatibility.
&nbsp;
Instead, defeining const representing the csv string for each file, reading and parsing it instead.
</pre>
</p>
<h3>Node Data</h3>
<p>
Rows of data, seperated by '\n'.
</p>

- First row contains the headers 
  - Id : string
  - Label : string
  - Type : 'input' (API node) | 'output' (dynamoDB node) | 'default' (lmbda node)
  &nbsp;

<h3>Relations</h3>
<p>
The relations data, has a diffrent structure, in order to present diffrent flows in the app.
Groups of Data, each one contains flow id, and pairs of node id's seperated by a comma.

```
flowId + '\n' + sourceId,targetId' + '\n' ....
```
Groups are seperated with a space after '\n';

For example:

```
flow 1\n1,2\n2,6\n flow 2
```
> The data consts are inside the app.consts file

 &nbsp;
  
