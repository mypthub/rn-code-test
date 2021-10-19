//
//  FetchKey.m
//  RNCodeTest
//
//  Created by admin on 14/10/21.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import "FetchKeyIOS.h"
#import <UIKit/UIKit.h>

@implementation FetchKeyIOS

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(getKey:(RCTResponseSenderBlock)callback){
 @try{
   NSString *key = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"SERVICE_KEY"];
   callback(@[ key]);
 }
 @catch(NSException *exception){
   callback(@[[NSNull null]]);
 }
}
@end
