# jinkim.io (Personal website)

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deploying

1. After building the project, run `aws configure` with the correct access key and secret.
2. Point the BUCKET_NAME variable to the desired bucket.
3. Run `python3 deploy.py`. Make sure to have `boto3` installed locally.
4. Invalidate Cloudfront instances.
