//
//  RNKeys.swift
//  RNCodeTest
//
//  Created by Steve Klassen on 2020-09-03.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(RNKeys)
class RNKeys: NSObject {
  
  @objc
  func getServiceKey(_ callback: RCTResponseSenderBlock) {
    guard let serviceKey = (Bundle.main.object(forInfoDictionaryKey: "ServiceKey") as? String) else {
      fatalError("The service key is a required setting!")
    }
    callback([serviceKey])
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
