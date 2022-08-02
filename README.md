# AWS serverless typescript demo - Backslash Frontend assigment 

### react app representing the code flow of API calls, based on AWS serverless typescrip Demo.
&nbsp;
<img width="1726" alt="Screen Shot 2022-08-02 at 11 09 21" src="https://user-images.githubusercontent.com/62664469/182366970-68fad222-0065-4841-9a81-91d6aabf655a.png">
<hr/>
<p>
Aws demo app consists of an Amazon API Gateway backed by four AWS Lambda functions and an Amazon DynamoDB table for storage.
<p/>

<h4> App data </h4>
<p>
Manually created csv files, one for nodes and another for the relations between them.
</p>

<p><pre>
Reading csv files didn't work due to  `versions` incompatibility.
&nbsp;
Instead, defeining const representing the csv string for each file, reading and parsing it instead.
</pre>
</p>


