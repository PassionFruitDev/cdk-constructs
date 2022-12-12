import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface WebsiteProps {
  accountId: string;
  region: string;
  dnsAccountId?: string;
  domain: string;
  subdomain: string;
}

export class Website extends Construct {
  constructor(scope: cdk.App, id: string, props?: WebsiteProps) {
    super(scope, id);

    
  }
}