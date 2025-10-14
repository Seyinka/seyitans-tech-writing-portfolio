## Info Endpoint  

**Method:** `GET`  
**Endpoint:** `/info` — Get list of all assets  
**Base URL:** `https://api-v2-sandbox.chimoney.io/v0.2.4/info/assets`

## Description  

This endpoint retrieves a list of all assets supported by Chimoney.
Each asset object contains information such as its name, type, description, availability, and supported countries.

---

## Testing Process (Using Postman)

1. **Open Postman** and click **New → Request**.  
1. Set the method to **GET** and paste the URL below:  
`https://api-v2-sandbox.chimoney.io/v0.2.4/info/assets`

1. Go to the **Headers** tab and add your API key:  

| Key           | Value               |
|---------------|---------------------|
| Authorization | YOUR_API_KEY |

Proceed to:

1. Click **Send**.  

1. You should receive a JSON response similar to the example below.

---

## JSON Response Snippet

```json
{
 "status": "success",
 "message": "Assets retrieved successfully",
 "data": {
     "benefitsList": [
         {
             "name": "Chimoney Wallet",
             "img": "https://res.cloudinary.com/dpi5au7jy/image/upload/v1742819554/Chimoney_Web_xx0vbq.png",
             "description": "Redeem to your wallet and spend anytime",
             "available": true,
             "code": "wallet",
             "type": "Wallet"
         },
         {
             "name": "INTERAC™ e-Transfer 🇨🇦",
             "img": "https://res.cloudinary.com/dpi5au7jy/image/upload/v1742820098/Interac_ixsw3z.png",
             "description": "Redeem to INTERAC™ e-Transfer",
             "countries": ["Canada"],
             "available": true,
             "code": "interac",
             "type": "Bank Transfer"
         }
     ]
 }
}
```

Check out full json response :
[JSON Response](https://syinka44-2942870.postman.co/workspace/Seyitan-Adeyinka's-Workspace~87f3b1bc-9e2f-42bf-8e49-82683246f135/request/48726911-a300c03e-9cf1-4857-9aec-52b8fd72957d?historyId=48726911-a8d1b20f-53dd-4fbb-b810-0c39ac959b2b&utm_source=postman&utm_medium=response_tab&utm_campaign=core&utm_content=link)