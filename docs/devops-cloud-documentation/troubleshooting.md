# Troubleshooting Common Issues

Here are some common problems you may face while using Amazon S3 and how to fix them.

---

## Bucket Name Error

- **Problem**: "Bucket name already exists."  
- **Fix**: Choose a unique name. Try adding numbers or your initials.

---

## Access Denied (Public Files)

- **Problem**: When trying to open a file URL, you see "Access Denied."  
- **Fix**:  
  - Check that **Block All Public Access** isn't marked.  
  - Verify bucket permissions and IAM policy allow public read.
  ![bucketpolicy](./images/bucket-policy.png)

---

## Static Website Not Loading

- **Problem**: Website endpoint returns an error.  
- **Fix**:  
  - Ensure `index.html` or name you gave your html file is uploaded.  
  - Check you enabled **Static Website Hosting** in bucket properties.
