# Conexión con AWS 

1. Crear proyecto react
   
    ```
    npx create-react-app projectideas
    ```
2. Descargar credenciales para conexión con AWS Account. Ir a sección AWS Details > AWS CLI.
3. Instalar AWS SDK.
    ```
    npm i aws-sdk --save
    ```
4. Añadir import en componente a usar AWS
   ```
   import AWS from 'aws-sdk';
   ```

5. Instanciar una conexión con AWS, llenar las credenciales.
   ```
   AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
    sessionToken: ''
    });
    ```

6. Crear objeto para interactuar con AWS
    ```
    const s3 = new AWS.S3();
    ```

# Poner bucket público

1. Configurar ACL del bucket
   ```
   {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::<Your-Bucket-name>",
                "arn:aws:s3:::<Your-Bucket-name>/*"
            ]
        }
        ]
    }
   ```

2. Configurar CORS
    ```
    [
        {
            "AllowedHeaders": [
                "*"
            ],
            "AllowedMethods": [
                "PUT",
                "POST",
                "GET"
            ],
            "AllowedOrigins": [
                "*"
            ],
            "ExposeHeaders": [
                "ETag"
            ]
        }
    ]

    ```

