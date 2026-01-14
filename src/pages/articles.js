import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './articles.module.css';

const articles = [
  {
    title: 'Automating Linux User Creation with Bash',
    description:
      'Create Linux users and groups using Bash scripting with logging and secure password handling.',
    url: 'https://seyitanjohnson.hashnode.dev/linux-user-creation-bash-script',
  },
  {
    title: 'Automating EC2 Deployment in a Custom AWS VPC Using Terraform',
    description:
      'Provision EC2 infrastructure in a custom VPC using Terraform variables and IaC best practices.',
    url: 'https://seyitanjohnson.hashnode.dev/automating-the-deployment-of-an-ec2-instance-in-a-custom-vpc-on-aws-using-terraform-and-variables',
  },
  {
    title: 'Building a Rock–Paper–Scissors Game Using Bash',
    description:
      'A Bash scripting project demonstrating conditionals, loops, and user input handling.',
    url: 'https://seyitanjohnson.hashnode.dev/creating-a-rock-paper-scissors-game-using-bashscript',
  },
  {
    title: 'Automating Flask App Deployment with Bash, Docker, and Nginx',
    description:
      'Deploy a Flask application using Docker, Bash automation, and Nginx as a reverse proxy.',
    url: 'https://seyitanjohnson.hashnode.dev/automating-flask-app-deployment-with-bash-docker-and-nginx',
  },
  {
    title: 'Blue-Green Deployment with Auto Failover and Observability',
    description:
      'Implement blue-green deployment strategies with monitoring and automatic failover.',
    url: 'https://seyitanjohnson.hashnode.dev/blue-green-auto-failover-observabilty',
  },
];

export default function Articles() {
  return (
    <Layout
      title="Articles"
      description="Technical articles by Seyitan Oluwaseitan">
      <main className={styles.page}>
        <h1 className={styles.title}>Articles</h1>
        <p className={styles.subtitle}>
          Technical writing on DevOps, cloud infrastructure, automation, and
          software delivery.
        </p>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <Link
              key={index}
              className={styles.card}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className={styles.readMore}>
                Read on Hashnode →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
