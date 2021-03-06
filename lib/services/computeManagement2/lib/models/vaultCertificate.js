/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the VaultCertificate class.
 * @constructor
 * Describes a single certificate reference in a Key Vault, and where the
 * certificate should reside on the VM.
 * @member {string} [certificateUrl] the URL referencing a secret in a Key
 * Vault which contains a properly formatted certificate.
 * 
 * @member {string} [certificateStore] the Certificate store in LocalMachine
 * to add the certificate to on Windows, leave empty on Linux.
 * 
 */
function VaultCertificate() {
}

/**
 * Defines the metadata of VaultCertificate
 *
 * @returns {object} metadata of VaultCertificate
 *
 */
VaultCertificate.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'VaultCertificate',
    type: {
      name: 'Composite',
      className: 'VaultCertificate',
      modelProperties: {
        certificateUrl: {
          required: false,
          serializedName: 'certificateUrl',
          type: {
            name: 'String'
          }
        },
        certificateStore: {
          required: false,
          serializedName: 'certificateStore',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = VaultCertificate;
