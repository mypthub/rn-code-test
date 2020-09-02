//
//  RNKeys.m
//  RNCodeTest
//
//  Created by Steve Klassen on 2020-09-03.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNKeys, NSObject)

RCT_EXTERN_METHOD(getServiceKey: (RCTResponseSenderBlock)callback)

@end
